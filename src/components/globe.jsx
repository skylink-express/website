import React, { Component } from 'react';

import * as THREE from 'three';

import ThreeGlobe from 'three-globe';

import map from './scene/map.png'
import bumpMap from './scene/bump.jpeg'

import styled from "@emotion/styled"

import transfers from './globe/transfers.js'

// per default canvas is a inline display
const SceneCanvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
`

export default class SceneComponent extends Component {
  constructor(...args) {
    super(...args)
    this.canvas = undefined;
  }

  // ensures the elements are defined
  componentDidMount() {
    this.setupRenderer();
    this.setupScene();
    this.setupCamera();
    this.setupLights();
    this.buildGlobe();
    this.animate();
    this.setState({
      loaded: true
    });
  }

  setupCamera() {
    let { innerWidth: width, innerHeight: height } = window;
    this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    this.camera.position.set(0, 0, 300);
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, antialias: true, alpha: false});
    // this.renderer.setSize(window.innerWidth, window.innerHeight, false)
    //
    // NOTE: we are doing this manually @ _resize
    // this.renderer.setPixelRatio(window.devicePixelRatio)
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
  }

  buildGlobe() {
    // https://github.com/vasturiano/globe.gl/blob/master/example/emit-arcs-on-click/index.html#L12
    // use this example to implement final result

    // const N = 20;
    // const arcsData = [...Array(N).keys()].map(() => ({
    //   startLat: (Math.random() - 0.5) * 180,
    //   startLng: (Math.random() - 0.5) * 360,
    //   endLat: (Math.random() - 0.5) * 180,
    //   endLng: (Math.random() - 0.5) * 360,
    //   color: 'blue' 
    // }));

    this.sphere = new ThreeGlobe()
      .globeImageUrl(map)
      .bumpImageUrl(bumpMap)
      .showAtmosphere(false)
      // .atmosphereAltitude(0.05)
      // .arcColor(0x5E17FE)
      .arcColor('color')
      .arcDashLength(1.0)
      .arcDashInitialGap('gap')
      .arcDashGap(2.0)
      .arcDashAnimateTime(() => 2000)
      // .arcAltitude(0.1)
      .arcAltitudeAutoScale(0.3)
      .arcStroke(0.3)
      .arcsTransitionDuration(1000)
    ;

    function distance({startLat, startLng, endLat, endLng}) {
      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(endLat-startLat);  // deg2rad below
      var dLon = deg2rad(endLng-startLng); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(startLat)) * Math.cos(deg2rad(endLat)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      return d;
    }

    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }

    function enrich(tx) {
      tx.d = distance(tx);
      tx.color = 'red';
      return tx;
    }

    function initial_gap(tx,i) {
      tx.gap = i * 0.5;
      return tx;
    }

    const emitArcs = () => {
      // setTimeout(emitArcs, 6000)
      // const txs = transfers.sort(() => .5 - Math.random()).slice(0,200).map(( t,i ) => { t.gap = i*0.5; return t } );
      //
      const txs = transfers.map(enrich);
      // sort on distance desc
      txs.sort((a,b) => { return b.d - a.d });
      const txs_long = txs.slice(0,100);

      // sort randomly
      txs.sort(() => .5 - Math.random())
      const txs_rand = txs.slice(0,50);

      const txs_comb = txs_long.concat(txs_rand)
      txs_comb.sort(() => .5 - Math.random())

      
      this.sphere.arcsData(txs_comb.map(initial_gap))
    }
    emitArcs();

    this.scene.add(this.sphere)
  }

  setupLights() {
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
    // directionalLight.target = sphere
    directionalLight.position.set(10,10,10)
    this.scene.add( directionalLight )
    // some basic light we do not want things to get too dark
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.4))
  }

  animate() {
    // Start loop again
    requestAnimationFrame(() => this.animate());

    // resize if needed, and change projectionMatrix
    // if need be
    const {needResize, width, height} = this._resizeRenderer()

    if(needResize) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }

    // rotate sphere
    this.sphere.rotation.y += 0.0038;
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <SceneCanvas ref={element => this.canvas = element} />
    )
  }
  
  // NOTE: we resize the based on the clientWidth and 
  // clientHeight of the canvas element which has been
  // set to 100% of its parent element. This gives us
  // the option to control the parent element from the
  // page uncluding the sphere.
  _resizeRenderer() {
    const canvas = this.renderer.domElement;
    if(canvas === undefined || !canvas) {
      return {needResize: false};
    }

    const pr = typeof window !== 'undefined' ? window.devicePixelRatio : 2;
    const width = canvas.clientWidth * pr;
    const height = canvas.clientHeight * pr;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      console.log(needResize, width, height, canvas.width);
      this.renderer.setSize(width, height, false);
    }
    return { needResize, width, height };
  }
}

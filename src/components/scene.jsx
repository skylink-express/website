import React, { Component } from 'react';

import * as THREE from 'three';

import map from './scene/map.png'
import bumpMap from './scene/bump.jpeg'

import styled from "@emotion/styled"

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
    this.buildScene();
    this.animate();
    this.setState({
      loaded: true
    });
  }

  setupCamera() {
    let { innerWidth: width, innerHeight: height } = window;
    this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    this.camera.position.set(0, 0, 14);
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

  buildScene() {
    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5,50,50),
      new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load(map),
        bumpMap: new THREE.TextureLoader().load(bumpMap),
        bumpScale: 0.02
      })
    );

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

    const pr = window.devicePixelRatio;
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

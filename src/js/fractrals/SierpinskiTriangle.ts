import Fractral from './Fractral'
import * as _three from 'three'
import Scene from '../scene/Scene'
import { __promisify__ } from 'glob';

export default class SierpinskiTriangle extends Fractral {
  private x: number;
  private y: number;
  private z: number;
  private width: number;
  private state: number;
  
  public constructor(
    x: number,
    y: number,
    z: number,
    width: number,
    state: number,
    level: number,
    scene: Scene,
    name: string,
    color: string,
  ) {
    super(scene, name, color, level)
    this.x = x
    this.y = y
    this.z = z
    this.width = width
    this.state = state
  }

  public init(): void {
    const scene = this.getMainScene.getScene
    // Add cube to Scene
    // #TODO this.calcMengersponge(scene, this.x, this.y, this.z, this.width, this.state, this.getLevel, this.getColor)
    // Add light to scene
    const spotLight = new _three.SpotLight(0xffffff, 0.9)
    const ambLight = new _three.AmbientLight(0xffffff, 0.3)
    spotLight.position.set(0, 100, 50)
    spotLight.castShadow = true
    scene.add(spotLight)
    scene.add(ambLight)
    scene.add(this.calcTriangle())

    
  }
  
  /*
  private calcCube(x: number, y: number, z: number, width: number, color: string): _three.Mesh {
    const CUBE_MATERIAL = new _three.MeshPhongMaterial({ color: color, flatShading: true, shininess: 2 })
    const geometry = new _three.BoxBufferGeometry(width, width, width)
    const cube = new _three.Mesh(geometry, CUBE_MATERIAL)
    cube.position.set(x, y, z)
    cube.receiveShadow = true
    return cube
  }
  */

  private calcTriangle(): _three.Mesh {

    const triangleGeometry = new _three.Geometry();
    triangleGeometry.vertices.push(new _three.Vector3(0.0, 1.0, 0.0));
    triangleGeometry.vertices.push(new _three.Vector3(-1.0, -1.0, 0.0));
    triangleGeometry.vertices.push(new _three.Vector3(1.0, -1.0, 0.0));
    triangleGeometry.faces.push(new _three.Face3(0, 1, 2));

    const triangleMaterial = new _three.MeshBasicMaterial({ color:0xFFFFFF, side: _three.DoubleSide }); 
    const triangle = new _three.Mesh(triangleGeometry, triangleMaterial);  
   
    triangle.position.set(-1.5, 0.0, 4.0);
    triangle.receiveShadow = true;

    return triangle;
  }
  
  
  


}

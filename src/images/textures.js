import { NearestFilter, TextureLoader, RepeatWrapping } from 'three';

import {
    dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from './images';

const dirtTexture = new TextureLoader().load(dirtImg);
const glassTexture = new TextureLoader().load(glassImg);
const grassTexture = new TextureLoader().load(grassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);
const groundTexture = new TextureLoader().load(dirtImg);
const planeTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
planeTexture.magFilter = NearestFilter;
planeTexture.wrapS = RepeatWrapping
planeTexture.wrapT = RepeatWrapping



export {
    dirtTexture,
    glassTexture,
    grassTexture,
    woodTexture,
    logTexture,
    groundTexture, 
    planeTexture
};
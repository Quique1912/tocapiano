import getNoteFromkEY from '../noteUtils';
import './index.css'
import * as Tone from "tone"

const synth = new Tone.Sampler({
	urls: {
		C4: "C4.ogg",
		"D#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		A4: "A4.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

//const synth = new Tone.Synth().toDestination();

let keyMap = {
  a:'C4',
  w:'C#4',
  s:'D4',
  o:'D#4',
  d:'E4',
  f:'F4',
  t:'F#4',
  g:'G4',
  y:'G#4',
  h:'A4',
  u:'A#4',
  j:'B4',
  k:'C5'
}

let keys = document.querySelectorAll('.key')
for(let key of keys){
  let noteToPlay = key.getAttribute('data-note')
  key.addEventListener('click', () => playNote(noteToPlay))
  key.addEventListener('mouseup', () => stopNote())
  key.addEventListener('mouseleave', () => stopNote())
}

document.addEventListener('keypress', ctrlTeclado)
document.addEventListener('keyrelease', stopNote)

function ctrlTeclado(event){
  let keyName = event.key
  //let note = keyMap[keyName]
  let note = getNoteFromkEY(keyName)
  playNote(note)
}

function playNote(note){
  synth.triggerAttackRelease(note);
}

function stopNote(){
  synth.triggerRelease();
}
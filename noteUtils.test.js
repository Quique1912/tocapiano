import getNoteFromkEY from "./noteUtils"
import{test, expect} from 'vitest'

test('si le paso la letra a devolvera C4', ()=>{
    let note = getNoteFromkEY('a')
    expect(note).toBe('C4')
})

test('si le paso la letra A devolvera C4', ()=>{
    let note = getNoteFromkEY('A')
    expect(note).toBe('C4')
})

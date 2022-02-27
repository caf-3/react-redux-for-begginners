export function toggleLesson(module, lesson){
    return {
        type: 'TOGGLE_LESSON',
        lesson,
        module
    }
}
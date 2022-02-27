import {connect } from 'react-redux'

const Video = ({ activeLesson, activeModule }) => {
  return (
    <div>
        Módulo: <strong>{activeModule.title}</strong>
        <br />
        Aula: <span>{activeLesson.title}</span>
    </div>
  )
}

export default connect( state => ({ activeLesson: state.course.activeLesson, activeModule: state.course.activeModule}))(Video)
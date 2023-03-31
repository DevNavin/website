/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import stock from '../images/stock_tracker_thumbnail.png';
import tic from '../images/tic_tac_thumbnail.png';
import book from '../images/books read.png';
import music from '../images/musicplayer.png';
import polls from '../images/employee polls.png';
import weather from '../images/weather_updates.png';

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY PROJECTS</h2>
          <div className={classes.Interest}>
          <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>STOCK TRACKER</h3>
                <a className='btn' href='https://navinstocktracker.netlify.app/' target="_blank" title='view live demo' ><img className='img-setup' src={stock} alt="stock"/></a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.app}>
                <h3>TIC-TOK-TOE GAME</h3><div>ice</div>
                <a className='btn' href='https://tictactoenavin.netlify.app/' target="_blank" title='view live demo' ><img className='img-setup' src={tic} alt="stock"/></a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>MY BOOKS</h3>
                <a className='btn' href='https://myreadingstatus.netlify.app/' target="_blank" title='view live demo' ><img className='img-setup' src={book} alt="stock"/></a>
              </div>
            </ScrollAnimation>


            
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>MUSIC PLAYER</h3>
                <a className='btn' href='https://navmusicplayer.netlify.app/' target="_blank" title='view live demo' ><img className='img-setup' src={music} alt="stock"/></a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>EMPLOYEE POLLS</h3>
                <a className='btn' href='https://employepolls.netlify.app/' target="_blank" title='view live demo' ><img className='img-setup' src={polls} alt="stock"/></a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>WEATHER TRACKER</h3>
                <a className='btn' href='https://trueweathertracker.netlify.app/' target="_blank" title='view live demo' ><img className='img-setup' src={weather} alt="stock"/></a>
              </div>
            </ScrollAnimation>

          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;
import './Styles/Schedule-Page.css'
import {Navigation} from "../../Components/Navigation";

export function SchedulePage() {
    return(
        <div id={'schedule-wrapper'}>
            <Navigation/>
            <div className={'container'}>
                <h1 className={'title'}>Schedule</h1>
                <div className={'content'}>
                    <div className={'content__column'}>
                        <div className={'column__item'}>
                            <h3 className={'item__title'}>Monday</h3>
                            <hr className={'item__line'}/>
                            <p className={'item__txt'}>First lesson: 10:00-11:00</p>
                            <p className={'item__txt'}>Second lesson: 11:20-12:20</p>
                            <p className={'item__txt'}>Third lesson: 12:40-13:40</p>
                            <p className={'item__txt'}>Homework: 14:00-15:00</p>
                            <p className={'item__txt'}>Checking homework with teacher: 15:20-16:20</p>
                        </div>
                        <div className={'column__item'}>
                            <h3 className={'item__title'}>Wednesday</h3>
                            <hr className={'item__line'}/>
                            <p className={'item__txt'}>First lesson: 10:00-11:00</p>
                            <p className={'item__txt'}>Second lesson: 11:20-12:20</p>
                            <p className={'item__txt'}>Third lesson: 12:40-13:40</p>
                            <p className={'item__txt'}>Homework: 14:00-15:00</p>
                            <p className={'item__txt'}>Checking homework and teacher's help: 15:20-16:20</p>
                        </div>
                        <div className={'column__item'}>
                            <h3 className={'item__title'}>Friday</h3>
                            <hr className={'item__line'}/>
                            <p className={'item__txt'}>First lesson: 10:00-11:00</p>
                            <p className={'item__txt'}>Second lesson: 11:20-12:20</p>
                            <p className={'item__txt'}>Third lesson: 12:40-13:40</p>
                            <p className={'item__txt'}>Homework: 14:00-15:00</p>
                            <p className={'item__txt'}>Checking homework and teacher's help: 15:20-16:20</p>
                        </div>
                    </div>
                    <div className={'content__column'}>
                        <div className={'column__item'}>
                            <h3 className={'item__title'}>Tuesday</h3>
                            <hr className={'item__line'}/>
                            <p className={'item__txt'}>First lesson: 10:00-11:00</p>
                            <p className={'item__txt'}>Second lesson: 11:20-12:20</p>
                            <p className={'item__txt'}>Third lesson: 12:40-13:40</p>
                            <p className={'item__txt'}>Homework: 14:00-15:00</p>
                            <p className={'item__txt'}>Checking homework and teacher's help: 15:20-16:20</p>
                        </div>
                        <div className={'column__item'}>
                            <h3 className={'item__title'}>Thursday</h3>
                            <hr className={'item__line'}/>
                            <p className={'item__txt'}>First lesson: 10:00-11:00</p>
                            <p className={'item__txt'}>Second lesson: 11:20-12:20</p>
                            <p className={'item__txt'}>Third lesson: 12:40-13:40</p>
                            <p className={'item__txt'}>Homework: 14:00-15:00</p>
                            <p className={'item__txt'}>Checking homework and teacher's help: 15:20-16:20</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
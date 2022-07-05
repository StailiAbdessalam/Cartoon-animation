// import Image from 'next/image';
// components 
import classes from '../../styles/Home/Hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <img
          src='https://scontent.frba3-2.fna.fbcdn.net/v/t39.30808-6/278093867_150651990754529_7950582699856785061_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGrWrVCYSLVkolr9-Q0WGUIyaxYMUWN3X3JrFgxRY3dfTgjIgnj_5-Shm9HiA5ATNQAn_4zOaFC4zFeDJYn4TCm&_nc_ohc=XPtUQUyW4QwAX_8mkPP&_nc_ht=scontent.frba3-2.fna&oh=00_AT-IplnkctYaqX4DrpxHsLBXR9dC2Mrj6xH5W0rQX5OVTQ&oe=62C83FA6'
          alt='An image showing Abdessalam'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Abdessalam</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;

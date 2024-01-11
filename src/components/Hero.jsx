import { styles } from "../styles";

const Hero = () => {

  return (
    <>
      <section
        className={`relative w-full h-screen mx-auto flex flex-row`}
        style={{
          backgroundImage: 
            "linear-gradient(180deg, rgba(6,8,22,1) 0%, rgba(6,8,22,0.8) 16%, rgba(255,255,255,0) 65%, rgba(6,8,22,1) 100%)",
        }}
      >

      <div
          className={`flex flex-col justify-center items-center inset-0 mx-auto ${styles.paddingX}`}
        >
          <div>
            <h1 className={`${styles.heroSubText}`}>
              Rémi Sulpice
            </h1>
            <h2 className={`${styles.heroHeadText}`}>
              DEVELOPER<br />
              <span className={`${styles.heroHeadSubText}`}>Fullstack & Blockchain</span>
            </h2>
          </div>
        </div>    
        
      </section>
    </>
  );
};

export default Hero;

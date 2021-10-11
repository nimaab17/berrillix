import classes from "./about.module.scss";

const About = (): JSX.Element => {
  return (
    <div className={classes.about}>
      <div className={classes.about__img}></div>

      <div className={classes.about__content}>
        <div className={classes.about__content__description}>
          <span >Berrillix</span>
          <p className="font-semibold pr-4">
            Fermentum et sollicitudin ac orci phasellus. Elementum sagittis
            vitae et leo. Phasellus egestas tellus rutrum tellus pellentesque
            eu. Quis ipsum suspendisse ultrices gravida dictum. Quis varius quam
            quisque id diam vel quam. Nibh sit amet commodo nulla facilisi
            nullam vehicula ipsum. Vitae auctor eu augue ut. Gravida neque
            convallis a cras semper auctor neque. Vel fringilla est ullamcorper
            eget nulla facilisi etiam. Adipiscing elit ut aliquam purus sit amet
            luctus venenatis. Diam vel quam elementum pulvinar. Libero justo
            laoreet sit amet cursus sit amet. Quam nulla porttitor massa id
            neque aliquam. Orci phasellus egestas tellus rutrum tellus
            pellentesque eu tincidunt tortor. Amet facilisis magna etiam tempor
            orci. Amet consectetur adipiscing elit duis tristique sollicitudin
            nibh sit. Sollicitudin ac orci phasellus egestas tellus rutrum. Enim
            blandit volutpat maecenas volutpat blandit. Id volutpat lacus
            laoreet non. Nulla aliquet enim tortor at auctor.
          </p>
        </div>

        <form
          className={`${classes.about__content__subscription} bg-white shadow-md rounded px-8 pt-6 pb-8 `}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl  text-center  font-bold mb-4"
              htmlFor="email"
            >
              News & Updatees <span className="block font-extrabold">Subscription</span> 
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Your E-mail Address"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="button"
            >
             Send
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};
export default About;

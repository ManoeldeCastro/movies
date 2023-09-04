import styles from './Form.module.css';

const Form = () => {
  return (
    <section className={styles.container}>
      <h2>New Video</h2>
      <form action="">
        <div>
          <label htmlFor="">URL:</label>
          <input
            type="text"
            placeholder="enter the URL of the video"
            required
          />
          <div>
            <label htmlFor="">Category</label>
            <select name="" id="">
              <option value="">Select a category</option>
            </select>
          </div>
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default Form;

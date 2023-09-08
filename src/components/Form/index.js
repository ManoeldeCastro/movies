import styles from './Form.module.css';
import { categories } from '../Category';
import { useState } from 'react';

const Form = () => {
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState('');

  function validateUrl(url) {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;
    if (!regex.test(url) || url.length < 43) {
      setErrors('Error: Invalid URL');
      return false;
    } else {
      return url.substring(32, 43);
    }
  }

  const onSave = (e) => {
    e.preventDefault();

    if (!category || category === '-') {
      setErrors('Erro: Set a category');
      return;
    } else {
      setErrors('');
    }

    const urlVideo = validateUrl(url);
    if (urlVideo && category) {
      const newVideo = { url, category };
      setVideos([...videos, newVideo]);
      localStorage.setItem('videos', JSON.stringify([...videos, newVideo]));
      setUrl('');
      setCategory('-');
    } else {
      setErrors('Error: Invalid URL');
    }
  };

  return (
    <section className={styles.container}>
      <h2>New Video</h2>
      <form onSubmit={onSave}>
        <div>
          <label htmlFor="">URL:</label>
          <input
            type="text"
            placeholder="Enter the URL of the video..."
            required
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            maxLength="43"
            minLength="43"
          />
          <div>
            <label htmlFor="">Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="-">Select a category...</option>
              {categories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div>
          <button>Register</button>
          <div>{errors && <p>{errors}</p>}</div>
        </div>
      </form>
    </section>
  );
};

export default Form;

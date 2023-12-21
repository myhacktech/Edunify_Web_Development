import { useForm, Controller } from 'react-hook-form';

const SchoolForm = () => {
  const { handleSubmit, control, register, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch('/api/schools', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Data submitted successfully');
    } else {
      console.error('Error submitting data');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {}
      <div>
        <label>School Name</label>
        <input {...register('schoolName', { required: 'This field is required' })} />
        {errors.schoolName && <span>{errors.schoolName.message}</span>}
      </div>

      {}
      <div>
        <label>Email</label>
        <input {...register('email', { required: 'This field is required', pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      {}
      <div>
        <label>Upload School Image</label>
        <input type="file" {...register('schoolImage')} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SchoolForm;

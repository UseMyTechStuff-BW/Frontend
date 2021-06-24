import React from 'react';
import styled from 'styled-components';

const ErrorStyles = styled.div`
  color: #d51b00;
  font-size: 1.5rem;
  margin-bottom: .3%;
`

export default function Form(props) {
  const { values, update, submit, disabled, errors } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };


  return (
      <div>
        <div>
          <ErrorStyles>{errors.name}</ErrorStyles>
          <ErrorStyles>{errors.description}</ErrorStyles>
          <ErrorStyles>{errors.imgUrl}</ErrorStyles>
          <h1>Update your Listing:</h1>
          <form onSubmit={onSubmit}>
            <label>
              Name:&nbsp;&nbsp;
              <input
                value={values.name}
                onChange={onChange}
                name="name"
                type="text"
              />&nbsp;&nbsp;
            </label>
            <label>
              Description:&nbsp;&nbsp;
              <input
                value={values.description}
                onChange={onChange}
                name="description"
                type="text"
              />&nbsp;&nbsp;
            </label>
            <label>
              Upload a New Image:&nbsp;&nbsp;
              <input
                value={values.imgUrl}
                onChange={onChange}
                name="imgUrl"
                type="url"
              />&nbsp;&nbsp;
            </label>
            <button disabled={disabled}>Submit</button>
          </form>
        </div>
      </div>
  );
}
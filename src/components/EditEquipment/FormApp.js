import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../axiosWithAuth/axiosWithAuth';
import * as yup from 'yup';
import Form from './Form';
import schema from './FormSchema';
import { useParams, useHistory } from 'react-router-dom';

const initialFormValues = {
  name: '',
  imgUrl: '',
  description: '',
};

const initialFormErrors = {
  name: '',
  imgUrl: '',
  description: '',
};

const initialItem = [];
const initialDisabled = true;


function FormApp(props) {
  const [item, setItem] = useState(initialItem);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const { push } = useHistory();
  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth().get(`/api/equipment/${id}`)
      .then(res => {
        setFormValues(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [id])

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const updateItem = (itemToBeUpdated) => {
    axiosWithAuth()
      .put(`/api/equipment/${id}`, itemToBeUpdated)
      .then((res) => {
        setItem(res.data)
        //console.log(itemToBeUpdated);
        //push('');
      })
      .catch(err => {
        console.log(err);
      })
  };

  const updateSubmit = () => {
    const itemToBeUpdated = {
      name: formValues.name.trim(),
      description: formValues.description.trim(),
      imgUrl: formValues.imgUrl.trim(),
    };
    updateItem(itemToBeUpdated);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      //Setting up disabled submit button
      setDisabled(!valid);
    });
  }, [formValues]);

  
  return (
    <div>
      <div>
        <div>
        <Form
          values={formValues}
          update={inputChange}
          submit={updateSubmit}
          disabled={disabled}
          errors={formErrors}
          equipment={props.equipment}
        />
        </div>
      </div>
    </div>
  );
}

export default FormApp;
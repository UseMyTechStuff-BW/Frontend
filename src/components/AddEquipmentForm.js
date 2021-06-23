import React from 'react'

function AddEquipmentForm() {
  return (
    <>
    <h2 className='myItem-title'>My Items</h2>
    <h2 className='subTitle'>Out For Rent</h2>

    <form className="addItemForm">
      <h2>Add New Item</h2>

      <label className='addNew-label' >Listing Name
      <input className="addNew-Input" type='text' placeholder='Speaker, Monitor, etc.' />
      </label>
      
      <label className='addNew-label' >Listing description
      <input className="addNew-Input" type='text' placeholder='23.8" Full HD Monitor' />
      </label>

    </form>

    <div className='item-list'></div>
      <div className="item-card">
        <div className="item-info">
          <h3>Speaker</h3>
          <p>This speaker is easy to use and in good condition. Used for parties and simmilar big events.</p>
          <button>Remove</button>
        </div>
    <img src="https://images.unsplash.com/photo-1531104985437-603d6490e6d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1923&q=80" alt=""></img>
    </div>
    </>
  )
}

export default AddEquipmentForm;
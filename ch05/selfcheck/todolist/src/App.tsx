export default function App() {
  return (
    <div className='todo'>
      <h1 className='todo__title'>Todo List</h1>
      <p className='todo__subtitle'>Please enter your details to continue.</p>
      {/* 할 일 등록  */}
      <form className='todo__form'>
        <div className='todo__editor'>
          <input
            type='text'
            className='todo__input'
            placeholder='Enter Todo List'
          />
          <button className='todo__button' type='submit'>
            Add
          </button>
        </div>
      </form>
      {/* 할 일 목록  */}
      <ul className='todo__list'>
        {/* 할 일 목록이 없을 때  */}
        <li className='todo__item todo__item--empty'>
          <p className='todo__text--empty'>There are no registered tasks</p>
        </li>
        {/* 할 일 목록이 있을 때  */}
        {/* 할 일이 완료되면 .todo__item--complete 추가  */}
        <li className='todo__item todo__item--complete'>
          <div className='todo__checkbox-group'>
            <input type='checkbox' className='todo__checkbox' checked />
            <label>Eat Breakfast</label>
          </div>
          {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)  */}
          {/* <input type="text" className="todo__modify-input" />  */}
          <div className='todo__button-group'>
            <button className='todo__action-button'>
              <svg
                width='23'
                height='23'
                viewBox='0 0 23 23'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.45 7.04937L15.9505 10.55L8.34938 18.1514L5.22844 18.4959C4.81064 18.5421 4.45764 18.1888 4.50412 17.771L4.85138 14.6478L12.45 7.04937ZM18.1155 6.52819L16.4719 4.88453C15.9592 4.37182 15.1277 4.37182 14.615 4.88453L13.0688 6.43084L16.5692 9.93145L18.1155 8.38513C18.6282 7.87215 18.6282 7.04089 18.1155 6.52819Z'
                  fill='#4F4F4F'
                />
              </svg>
            </button>
            <button className='todo__action-button'>
              <svg
                width='15'
                height='16'
                viewBox='0 0 15 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z'
                  fill='#4F4F4F'
                />
                <path
                  d='M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z'
                  fill='#4F4F4F'
                />
              </svg>
            </button>
          </div>
        </li>
        <li className='todo__item todo__item--complete'>
          {/* <div className="todo__checkbox-group">
            <input type="checkbox" className="todo__checkbox" checked />
            <label>Eat Breakfast</label>
          </div>  */}
          {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)  */}
          <input type='text' className='todo__modify-input' />
          <div className='todo__button-group'>
            <button className='todo__action-button'>
              <svg
                width='23'
                height='23'
                viewBox='0 0 23 23'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.45 7.04937L15.9505 10.55L8.34938 18.1514L5.22844 18.4959C4.81064 18.5421 4.45764 18.1888 4.50412 17.771L4.85138 14.6478L12.45 7.04937ZM18.1155 6.52819L16.4719 4.88453C15.9592 4.37182 15.1277 4.37182 14.615 4.88453L13.0688 6.43084L16.5692 9.93145L18.1155 8.38513C18.6282 7.87215 18.6282 7.04089 18.1155 6.52819Z'
                  fill='#4F4F4F'
                />
              </svg>
            </button>
            <button className='todo__action-button'>
              <svg
                width='15'
                height='16'
                viewBox='0 0 15 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z'
                  fill='#4F4F4F'
                />
                <path
                  d='M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z'
                  fill='#4F4F4F'
                />
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

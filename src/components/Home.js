import react from 'react'
import { useEffect } from 'react/cjs/react.production.min'
import styled from 'styled-components'
import { useGlobalDataContext } from '../context/context'

const Home = () => {
  let { data, theme, changeTheme, total, setTotal, filter, setFilter } =
    useGlobalDataContext()
  data = Array.from(data)

  const filteredData = data
    .filter((item, index) =>
      filter !== ''
        ? item.title.toLowerCase().startsWith(filter.toLowerCase())
        : true
    )
    .map((item, index) => {
      return (
        <div key={index}>
          <p>
            <b>Title: </b>
            {item.title}
          </p>
          <p>
            <b>Style: </b>
            {item.style}
          </p>
          <p>
            <b>Price: </b>
            {item.price}
          </p>
          <p>
            <b>Description: </b>
            {item.description}
          </p>
          <p>
            <b>Free shipping</b>
            {item.isFreeShipping}
          </p>
          <button onClick={() => setTotal(+total + +item.price)}>Add</button>
          <hr />
        </div>
      )
    })

  return (
    <Wrapper>
      <div className={theme ? 'white' : 'black'}>
        <p>Total price: {total}</p>
        <hr />
        <button onClick={changeTheme}>Change theme</button>
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          type='text'
        />
        <h1>Products</h1>
        <hr />
        {filteredData}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  input {
    display: block;
  }

  .black {
    background: black;
    color: white;
  }

  .white {
    background: white;
    color: black;
  }
`

export default Home

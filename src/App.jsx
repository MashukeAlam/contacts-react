import { useState, lazy, Suspense } from 'react'

import './index.css'
import {data} from './data'

const Popup = lazy(() => import('./Popup').then(module => {return {default: module.Popup}}))

function App() {
  const [search, setSearch] = useState('')
  const [popup, setPopup] = useState({trigger: false, id: 1});
  const back = () => {
    console.log('here');
    setPopup({trigger: false, id: 1})
  }
  
  return (
    <>
      <h1 className='text-green-700 text-center font-extrabold'>Contacts React</h1>
      <div className="flex justify-center content-center flex-col items-center">
        <input className='border-2 m-2 p-2' type="text" name="" id="" onChange={e => setSearch(e.target.value)} />
        {search !== '' ? <h3>Searching for {search} </h3> : <></>}
        <table className='border table-auto'>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </thead>
        <tbody>
          {data.filter(item => {
            return search != '' ? item.first_name.toLowerCase().includes(search) | item.last_name.toLowerCase().includes(search) : item
          }).map(item => (
              <tr onClick={() => setPopup({trigger: true, id: item.id - 1})} className='bg-emerald-200 hover:bg-emerald-300 hover:font-medium font-light' key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone_number}</td>
              </tr>
          ))}



        </tbody>
      </table>
      </div>
      
        {popup.trigger ? 
        <Suspense>

          <Popup back={back} email={data[popup.id].email} name={data[popup.id].first_name + " " + data[popup.id].last_name} phone={data[popup.id].phone_number} />
        </Suspense>
 : ""}
  
    </>
  )
}

export default App

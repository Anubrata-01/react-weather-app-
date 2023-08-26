// import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
const Input = ({setData,data,handlebtn}) => {

  return (
    <>

    <div className='input'>
        <input type="text" name='input' id="text" placeholder='search for city...'  onChange={(e)=>{
          setData(e.target.value)
        }}/>
        {/* <SearchIcon id="searchicon" onClick={handlebtn}/> */}
        <Button variant="contained" size="large" color='success' onClick={handlebtn}>
        Search
      </Button>


    </div>
    </>
  )
}

export default Input
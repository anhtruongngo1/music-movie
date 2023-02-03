import React, { useEffect, useRef, useState } from 'react';
import "../search/SearchFilm.scss";
import {BsSearch} from "react-icons/bs"
import { getSearchFilm } from "../../service/service";
import { useNavigate } from "react-router-dom";
import useDebounce from '../../hook/useDebounce';
import HeadlessTippy from '@tippyjs/react/headless';




function SearchFilm() {

  const [dataSearch, setDataSearch] = useState([])
  const [searchValue , setSearchValue ] = useState('')
  const [showResult , setShowResult] = useState(false)
  const [loading , setLoading] = useState(false)
  const [showInput , setShowInput] = useState(false)


    const navigate = useNavigate()

    const textInput = useRef(null);

    const debounced = useDebounce(searchValue , 500);
    const TYPE = 'less'

    useEffect(() => {
      if(!debounced.trim()){
          setDataSearch([]);
          return;
      }
      const fetchApi = async () =>{
        setLoading(true);

        const result = await getSearchFilm(encodeURIComponent(debounced) , TYPE);
        setDataSearch(result.data)

        setLoading(false)

      }
      fetchApi()   
    }, [debounced])


    const handleSeach = (e) => {
      const searchValue = e.target.value ;
      if(!searchValue.startsWith(' '))
        
        setSearchValue(searchValue)
        setShowResult(true);


    }

    let handleDetailFilm = (id) => {
        navigate(`/manager-detail-film/${id}`)
      }
  const handleHideResult = () => {
        setShowResult(false);
    };
  const handleShow = () =>{
    setShowInput(!showInput)
    setShowResult(false)
    setSearchValue('')

  }


    return ( 
        <>
         <HeadlessTippy
                interactive
                offset={[100, -20]}

                visible={showResult  && dataSearch.length >= 0}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                  <div className="search-body-film" tabIndex="-1" {...attrs}>
                  {dataSearch && dataSearch.length > 0 
                  ?
                   dataSearch.map((item, i) => (
                      <div key={item.id}
                          onClick={()=> handleDetailFilm(item.id)}
                          className="body-film-content"
                      >
                      <div className="body-left">
                          <img src={item.image}  alt=""/>

                      </div>
                      <div className="body-right">
                              <span>{ item.name}</span>

                      </div>
                      
              </div>
                  )): <div>
                    <span> Không tìm thấy</span>
                     </div>
                  }
          </div>
                )}
            >

           
        <div className="search-container" >
            <BsSearch 
            onClick={handleShow}
                className="search-film-icon" />
            <input className={showInput ? "search-film active" : 'search-film'}
                    type="text"
                    ref={textInput}
                    value={searchValue}
                    placeholder="Nhập tên film"  
                    onChange={handleSeach}
                    onFocus={() => setShowResult(true)}

                />
            </div>
            
           
            </HeadlessTippy>
        </>
     );
}

export default SearchFilm;
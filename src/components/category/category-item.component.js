import './category-item.styles.scss';

const CategoryItem = ({category}) => {
  const{url,title}=category
return(

    <div className="category-container" >
      <div className='background-image' style={{backgroundImage:`url(${url})`
    }}>
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </div>
      </div>
    </div>
)
}

export default CategoryItem;

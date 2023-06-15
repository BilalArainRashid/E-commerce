import React from 'react'

const Image = () => {
    return (
        <div className='main w-full mt-44 ml-44 flex justify-between'>
            <div className='submain1 w-2/4 pl-12'>
                <img src='https://cdn.shopify.com/s/files/1/0020/7483/7110/files/p-image-1.png?v=1621137105' />
            </div>
            <div className='submain2 w-3/4 flex flex-col'>
                <div className='upperchild flex'>
                <img className='pr-6' src='https://cdn.shopify.com/s/files/1/0020/7483/7110/files/p-image-2.png?v=1621137105'/>
                <img src='https://cdn.shopify.com/s/files/1/0020/7483/7110/files/p-image-3.png?v=1621137105'/>
                </div>
                <div className='lowerchild flex pt-7'>
                <img className='pr-6 ' src='https://cdn.shopify.com/s/files/1/0020/7483/7110/files/p-image-4.png?v=1621137105'/>
                <img src='https://cdn.shopify.com/s/files/1/0020/7483/7110/files/p-image-5.png?v=1621137106'/>
                </div>
            </div>
        </div>
    )
}

export default Image
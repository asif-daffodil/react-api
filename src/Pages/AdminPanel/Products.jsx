import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

DataTable.use(DT);

const Products = () => {
    const [showAddProductFrom, setShowAddProductFrom] = useState('hidden');
    // useQuery
    const { data, error, isLoading } = useQuery({
        queryKey: 'products',
        queryFn: async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/products');
            return response.data;
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* add new product button */}
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mb-4 cursor-pointer rounded' onClick={() => setShowAddProductFrom(null)}>
                Add New Product
            </button>
            <div className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-stone-600/60 z-30 ${showAddProductFrom}`} onClick={() => setShowAddProductFrom('hidden')}>
                <div className='w-1/2 bg-white p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded' onClick={(e) => e.stopPropagation()}>
                    <h1 className='text-2xl font-bold mb-4'>Add New Product</h1>
                    <form>
                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-sm font-bold mb-2'>Name</label>
                            <input type='text' id='name' name='name' className='w-full p-2 border border-gray-300 rounded' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='price' className='block text-sm font-bold mb-2'>Price</label>
                            <input type='number' id='price' name='price' className='w-full p-2 border border-gray-300 rounded' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='image' className='block text-sm font-bold mb-2'>Image</label>
                            <input type='file' id='image' name='image' className='w-full p-2 border border-gray-300 rounded' />
                        </div>
                        <div className='mb-4'>
                            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 cursor-pointer rounded'>
                                Save
                            </button>
                            <button type='button' className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <DataTable options={{
                paging: true,
                searching: true,
                ordering: true,
                info: true,
                autoWidth: true,
                responsive: true,
                pageLength: 5,
                lengthMenu: [5, 10, 25, 50, 75, 100],
            }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.products?.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>
                                <img src={`http://127.0.0.1:8000/storage/${product.image}`} alt={product.name} className='w-20 h-20' />
                            </td>
                            <td>{product.price}</td>
                            <td>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 cursor-pointer rounded'>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </DataTable>
        </div>
    );
};

export default Products;
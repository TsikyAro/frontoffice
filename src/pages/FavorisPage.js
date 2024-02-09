import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { ProductService } from './service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import FavoriteIcon from '../component/Favoris';
import myphoto from '../assets/img/landing.jpg';
import Menu from '../component/Menu';

export default function FavorisPage() {
    
    // const [products, setProducts] = useState();
    const[ products] = useState([
        {id:'1',category:'beau',name:'Luxe',price:'100'},
        {id:'2',category:'tsara kely',name:'Mobil',price:'500'},
        {id:'3',category:'manja kely',name:'Huhu',price:'100'},
        {id:'4',category:'mama',name:'Tsara Be',price:'100'},
        {id:'5',category:'alika kely',name:'Vaovao',price:'100'},
        {id:'6',category:'ololo',name:'Maybe',price:'100'},
        {id:'7',category:'noonnn',name:'oHoh',price:'100'},
        {id:'8',category:'bubu',name:'AIzaa',price:'100'},
    ]);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    // useEffect(() => {
    //     ProductService.getProducts().then((data) => setProducts(data));
    // }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    // const imageBodyTemplate = (rowData) => {
    //     return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
    // };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };
    const categoryBodyTemplate = (rowData) => {
        return formatCurrency(rowData.category);
    };
    const itemTemplate = (product, index) => {
        return (
            <div className="col-12" key={product.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={myphoto} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.category}</span>
                                </span>
                                <FavoriteIcon id={product.id}/>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${product.price}</span>
                            <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            {/* <h4 className="m-0">Liste de tous les Annonces Disponible</h4> */}
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );


    return (
        <div>
            <Toast ref={toast} />
            <div className="card">
                {/* <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar> */}
                <div>
                    <Menu/>
                </div>

                <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id"  paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Du {first} au {last} du {totalRecords} eme produit" globalFilter={globalFilter} header={header}>
                    
                    <Column field="name"  body={itemTemplate} style={{ minWidth: '16rem' }}></Column>
                    <Column field="category"  body={categoryBodyTemplate} style={{ minWidth: '16rem' }} hidden></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate}  style={{ minWidth: '8rem' }} hidden></Column>
                </DataTable>
            </div>
        </div>
    );
}
        
export const SidebarCategories = () => {

    const categories = (e: { target: { value: string } }) => { 
        
        console.log(e.target.value)    
    }
    return(
        <select onChange={categories} className="form-select sidebar-categories">
            <option selected>Escolha um nível</option>
            <option value="1">Facíl</option>
            <option value="2">Médio</option>
            <option value="3">Difícil</option>
        </select>
    )
}
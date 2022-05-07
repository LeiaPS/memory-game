type SidebarAttemptsProps = {
    attempts: number
}


export const SidebarAttempts = ({attempts}: SidebarAttemptsProps) => {
    return (
    <h1 className="display-6 sidebar-attempts text-center bg-white">
       {attempts}
    </h1>
    )
}
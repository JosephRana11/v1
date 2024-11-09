import cn from "app/lib/utils"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const BulletPoint = ({children , className} : {children : React.ReactNode , className? : string}) => {
    return (
        <li className={cn("flex gap-2" , className)}>
            <ArrowRightIcon fontSize="small"/>
            {children}
        </li>
    )
}

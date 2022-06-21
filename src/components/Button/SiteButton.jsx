import'./SiteButton.scss'
export default function SiteButton({children,type,...props}) {

    return(
        <button {...props} className="SiteButton" type={type}>{children}</button>
    )
}
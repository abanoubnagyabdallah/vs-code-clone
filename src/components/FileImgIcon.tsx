import { svgStyles } from '../styles'

export default function FileImgIcon({src,className}:{src:string,className:string}) {
  return (
    <div>
        <img src={src} style={svgStyles} className={className} />
    </div>
  )
}


type IVintageTitle = {
  title: string;
  img?:string;
  icon?:string
}
const VintageTitle = (props: IVintageTitle) => (
  <div className="vintage-header">
   {props.icon}
    <h2>{props.title}</h2>
    <img src="{props.img}" alt="" />
  </div>
);

export { VintageTitle };

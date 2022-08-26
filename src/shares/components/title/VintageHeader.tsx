
type IVintageHeader = {
  title: string;
  img?:string;
  icon?:string
}
const VintageHeader = (props: IVintageHeader) => (
  <div className="vintage-header">
   {props.icon}
    <h2>{props.title}</h2>
    <img src="{props.img}" alt="" />
  </div>
);

export { VintageHeader };

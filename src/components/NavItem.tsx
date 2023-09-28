export interface NavItem {
  name: string;
  activeItem: string;
  scroll: boolean;
  href: string;
}

export const NavItem = (props: NavItem) => {
  return (
    <div
      className={`group w-[10rem] text-center text-primary hover:cursor-pointer`}
    >
      <a href={props.href}>{props.name}</a>
      {props.activeItem === props.name ? (
        <div className="mt-1  h-1 bg-primary"></div>
      ) : (
        ""
      )}
    </div>
  );
};

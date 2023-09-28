import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Calendar } from "antd";
import dayjs, { Dayjs } from "dayjs";

export const Availability = (props: {
  setActiveNavItem: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  let dates = ["2023, 10, 1", "2023, 10, 2", "2023, 9, 27"];

  useEffect(() => {
    if (inView) {
      props.setActiveNavItem("Availability");
    }
  }, [inView]);

  return (
    <div className="mt-10 h-10 w-[60%]" ref={ref} id="availability">
      <h3 className="mb-10 text-primary">Dostupnost</h3>
      <Calendar
        disabledDate={(currentDate: Dayjs) => {
          return dates.some((date) => {
            return (
              currentDate.isSame(dayjs(date), "day") ||
              currentDate.diff(dayjs()) < 0
            );
          });
        }}
        fullCellRender={(date: Dayjs) => {
          const crossOut = dates.some((d) => {
            return date.isSame(dayjs(d), "day") || date.diff(dayjs()) < 0;
          });
          if (crossOut) {
            if (date.diff(dayjs()) < 0) {
              return (
                <div className="ant-picker-cell-inner ant-picker-calendar-date">
                  <div className="ant-picker-calendar-date-content">
                    <div className="ant-picker-calendar-date-value text-[#808080]">
                      {date.date()}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div className="ant-picker-cell-inner ant-picker-calendar-date">
                <div className="ant-picker-calendar-date-content">
                  <del className="ant-picker-calendar-date-value ">
                    {date.date()}
                  </del>
                </div>
              </div>
            );
          }
          return (
            <div className="ant-picker-cell-inner ant-picker-calendar-date">
              <div className="ant-picker-calendar-date-content">
                <div className="ant-picker-calendar-date-value ">
                  {date.date()}
                </div>
              </div>
            </div>
          );
        }}
      ></Calendar>
    </div>
  );
};

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const calculateCreatedAgo = date => {
  dayjs.extend(relativeTime);
  return dayjs(date).fromNow();
};

export const formatDatetoWeekdayTime = date =>
  dayjs(date).format("dddd, hh:mmA");

import moment from "moment";

export const formatDate = (
  dateString: string | number,
  format: string = "YYYY-MM-DD hh:mm"
) => {
  const date = new Date(parseInt(dateString.toString()) * 1000);
  return moment(date).format(format);
};

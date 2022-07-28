export default class DateTool{
  constructor(classlist, ActiveClass) {
    this.operation = document.querySelector(classlist);
    this.ActiveClass = ActiveClass;
  }

  operationData() {
    this.daysWeek = this.operation.dataset.semana.split(',').map(Number);
    this.hoursWeek = this.operation.dataset.horario.split(',').map(Number);
  }
  
  dataNow() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.timeNow = this.dateNow.getUTCHours() - 3;
  }
  
  nowOpen() {
    const openWeek = this.daysWeek.indexOf(this.dayNow) !== -1;
    const openHours = (this.timeNow >= this.hoursWeek[0]) && (this.timeNow < this.hoursWeek[1]);
    return openWeek && openHours;
  }
  
  openAsset() {
    if(this.nowOpen())
      this.operation.classList.add(this.ActiveClass);
  }

  init() {
    if(this.operation){
      this.operationData();
      this.dataNow();
      this.openAsset()

    }
    return this;
  }
}
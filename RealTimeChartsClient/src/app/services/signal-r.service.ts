import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { ChartModel } from 'app/interfaces/chartModel'

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private data: ChartModel;
  public bradcastedData: ChartModel;
  public publicData: ChartModel;
  private hubConnection: signalR.HubConnection

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/chart')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener = () => {

    this.hubConnection.on('transferchartdata', (data) => {
      this.data = data;
      this.publicData = JSON.parse(JSON.stringify(data));
    });
  }

  public broadcastChartData = () => {
    this.hubConnection.invoke('broadcastchartdata', this.data)
      .catch(err => console.error(err));
  }

  public addBroadcastChartDataListener = () => {
    this.hubConnection.on('broadcastchartdata', (data) => {
      this.bradcastedData = data;
    })
  }

}
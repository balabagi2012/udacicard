import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTIFCATION_KEY = "UdaciCards:quiznotifications";

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFCATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

export function createNotification() {
  return {
    title: "UdaciCard Notification",
    body: "Please remember to take the UdaciCard daily challenge!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFCATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(
          async ({ status }) => {
            console.log(status);
            if (status === "granted") {
              Notifications.cancelAllScheduledNotificationsAsync();

              //set next notiifcation time to 12:00
              let nextNotificationTime = new Date();
              nextNotificationTime.setDate(nextNotificationTime.getDate() + 1);
              nextNotificationTime.setHours(12);
              nextNotificationTime.setMinutes(0);

              const instantNotification = await Notifications.presentLocalNotificationAsync(
                createNotification()
              );
              const scheduleNotification = await Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: nextNotificationTime,
                  repeat: "day",
                }
              );
              console.log(instantNotification);
              console.log(scheduleNotification);

              AsyncStorage.setItem(NOTIFCATION_KEY, JSON.stringify(true));
            }
          }
        );
      }
    });
}

export function getFormattedCards (cardAmount) {
  return cardAmount === 1 ? '1 card' : `${cardAmount} cards`;
}

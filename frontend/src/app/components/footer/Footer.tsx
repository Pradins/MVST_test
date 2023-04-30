import React from 'react';
import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div>Made with</div>
            <div className={styles.footerImage}>
                <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAARCAYAAAC1tw6GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARUSURBVHgBvVVtaJxFEJ7Z973msxjRBlRq06RRayRV45+SkNx5lzSglig2YnuXnP7ojxYriqIVKo0/VNCqQbAiqGdiW9tI9UctQRO9QPxE0aaC9e5sLqZWCLEpaD6ad3fHeffukrtrFAuSgfd2Z3Z29pmZZ/cQlpDRcGuFUnKQAF6t7h14BZZRxFJGKZ2HeKgUQDfBMsuSgBDwLjNR+igss2C+Id7pq0Ft/cjtmuR2rYJlFjvfgFo8lhrpGPwPciJUW7Khd2Q623a6s6VRKe0DQrI9Vs/aSH8ys5bTst+231nM7fK5cy3063CJMhr2ln2xZWPRot5aUQLlZxIdzccztl9C/qe11kOIsBcFdfHl+SbWeXtjZj2nQtOzF9oZ4RpG/sN173729T8dfGpz/UpxWdEugVCrNU55bOt5gLnzWtlnVhVYp9jlNpOUUq08lJEmx9UTQX8rAXaZIAiHieACc6bD0taH34e9lbdEoudzACHBE4ZVQudc9Xgo8CSv7eKsLPbq00T17HYzMNEEL0glt0irsM4DsgQR6zh4mRucAwZdH67E0TSIB92BTfurewZ2GJChwLUE5C2VdgurRxYAJbb56jnADUQ0WVxU1Jexx0LNYQR6zgVKxkI70VwFSpKGx1HgHlZrVziyTQsY4nnTSmlvHnvAP+xIqGfHOeWoj9Ipb0gBwhETl4jbS5S+Wze6P4scEmJ3asT3rnnj2MyCncibGqCLEEMZs2V5fNUHBt/n6TmzjjTDyQyaYxHaHUn+1D7qv/5QdDK9rTx1KO3n7232ew3SnM2IqdDvTL5pJe9gnMoRcl+2A2/81bxMSI1zs/LFwgJbsnHCvRkuafkRbeI2gUP4ZQGqeQ3WM4QQIBJXoQGOH2SFm+WvTAMmBeivOMm/uDx8A0Whsp3IAqA/pbNXcFDuZe/6SDSZDciy1UtS2Tvc21dQ5NmtSTZYwjIVZO7sQTQNHF5/YOBkmhNRDuRl462urrXoz8Ri2wyZZuC9694Z/A6WEOFmyWA6XcWxVFe+w1ompwDsMAGJnkIJhVWRgZOJjpb7+ABD0gK0dy5sIDq0uJsS63o/nshoGsiARkUN+eckO/wbXSy25izTtiGPtBvjQf89PL9CCDHB5ItJm05UvfXJcb6y3dy3h4UtumOhwP1AutscidC1uqd/JKuiR6S093HdSlkdz8meIMr+TH4Knw41S+ZXDetX81KTJChDJc9hPBhwePNFL3a2cJkfsS0Zkcozwo1dzSY3a5egsfFxWeOLRmW2fyIYOMz9aWcK9FX3DrZn7GNbGy6fF4V/8HkX/WUxn87yQS/Y3K5nGan7BpRyTxJc0AnWp1i/kulRxaOXSYxu6+LbWh7lNN0noZyBTc1balM+GBNcwEF+ntqR0JNtX3NweCoebG5D0HczAN6HPzO4s7hCf1755qdj8F/k2+11xdk6P5IvJ0LNo/GtgU3/to9b3PZT2FsBlyh/A9Zo0T9QdaOdAAAAAElFTkSuQmCC'}/>
            </div>
        </div>
    );
};

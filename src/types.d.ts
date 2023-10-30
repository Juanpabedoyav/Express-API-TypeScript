export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'snowy'
export type Visibility = 'great' | 'good' | 'poor' | 'ok'

export interface DiaryEntry{
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}
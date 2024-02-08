export interface ReviewsResponseInterface {
  Title: string;
  RestaurantName: string;
  RestaurantLocation: string;
  Rating: number;
  Comment: string;
  Picture: Buffer;
}

export class ReviewsDTO {
  title: string;
  restaurantName: string;
  restaurantLocation: string;
  rating: number;
  comment: string;
  picture: Buffer;

  constructor(data: ReviewsResponseInterface) {
    this.title = data.Title;
    this.restaurantName = data.RestaurantName;
    this.restaurantLocation = data.RestaurantLocation;
    this.rating = data.Rating;
    this.comment = data.Comment;
    this.picture = data.Picture;
  }
}

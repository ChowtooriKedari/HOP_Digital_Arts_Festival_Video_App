import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: any[] = [];
  searchQuery: string = '';
  sortOption: string = 'A-Z';
  category: string = 'all';
  thumbnails: { [key: string]: string } = {};
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchVideos();
  }

  fetchVideos(): void {
    this.isLoading = true;
    const apiUrl = 'https://efogwy1o0e.execute-api.eu-north-1.amazonaws.com/dev/fetchVideos';
    const params = { searchQuery: this.searchQuery, category: this.category };

    this.http.get<any[]>(apiUrl, { params }).subscribe(
      (data) => {
        this.videos = this.sortVideos(data);
        this.generateThumbnails(data);
      },
      (error) => {
        console.error('Error fetching videos:', error);
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  generateThumbnails(videos: any[]): void {
    videos.forEach((video) => {
      // Simulate thumbnail generation; replace with actual thumbnail service if needed.
      this.thumbnails[video.videoId] = video.thumbnailUrl || 'path-to-placeholder-thumbnail';
    });
  }

  sortVideos(videos: any[]): any[] {
    if (this.sortOption === 'A-Z') {
      return videos.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.sortOption === 'Z-A') {
      return videos.sort((a, b) => b.title.localeCompare(a.title));
    } else if (this.sortOption === 'Last Updated') {
      return videos.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
    }
    return videos;
  }
}

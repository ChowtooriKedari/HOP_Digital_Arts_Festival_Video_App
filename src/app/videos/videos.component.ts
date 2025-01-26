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
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}
  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
  
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
      },
      (error) => {
        console.error('Error fetching videos:', error);
      },
      () => {
        this.isLoading = false;
      }
    );
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

  playVideo(event: Event): void {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.play();
  }

  pauseVideo(event: Event): void {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.pause();
    videoElement.currentTime = 0; // Reset to the start
  }
}

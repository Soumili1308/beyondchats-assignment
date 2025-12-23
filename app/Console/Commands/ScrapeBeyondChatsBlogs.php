<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\Article;
use Symfony\Component\DomCrawler\Crawler;

class ScrapeBeyondChatsBlogs extends Command
{
    protected $signature = 'scrape:beyondchats';
    protected $description = 'Scrape 5 oldest blogs from BeyondChats';

    public function handle()
    {
        $response = Http::get('https://beyondchats.com/blogs/');
        $crawler = new Crawler($response->body());

        $crawler->filter('article')->slice(-5)->each(function ($node) {
            $title = $node->filter('h2')->text();
            $content = $node->filter('p')->first()->text();
            $url = $node->filter('a')->attr('href');

            Article::create([
                'title' => $title,
                'content' => $content,
                'source_url' => $url,
                'is_updated' => false
            ]);
        });

        $this->info('Blogs scraped successfully.');
    }
}

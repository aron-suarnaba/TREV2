<?php

use Inertia\Testing\AssertableInertia as Assert;

it('can view the landing page', function () {
    $response = $this->get(route('home'));

    $response->assertOk();
    $response->assertInertia(function (Assert $page) {
        $page->component('Landing');
    });
});

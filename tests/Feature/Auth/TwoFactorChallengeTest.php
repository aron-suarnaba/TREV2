<?php

test('two factor challenge is not available', function () {
    $this->markTestSkipped('Two-factor authentication is not included with Breeze.');
});

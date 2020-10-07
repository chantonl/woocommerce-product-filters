<?php
    $clear_button = addslashes( '<a href="' . $tool_link . '" target="_blank" class="wcpf-clear-cache-button add-new-h2">' . __( 'Clear Cache', 'wcpf' ) . '</a>' );
?>
<script type="text/javascript">
    (function () {
        window.addEventListener('load', function () {
            var addNewButtonElement = jQuery('.page-title-action:last'),
                clearCacheButtonElement = jQuery("<?php echo $clear_button; ?>");

            clearCacheButtonElement.insertAfter(addNewButtonElement);
        });
    })();
</script>
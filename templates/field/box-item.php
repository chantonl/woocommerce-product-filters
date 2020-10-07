<?php
    $item_classes = [];

    if ( $item['option_is_set'] ) {
        $item_classes[] = 'selected';
    }

    if ( $item['disabled'] ) {
        $item_classes[] = 'disabled';
    }
?>
<div class="wcpf-box-item <?php echo implode( ' ', $item_classes ); ?>"
     data-value="<?php echo esc_attr( $item['key'] ); ?>"
     style="<?php echo $box_style; ?>">
    <div class="wcpf-box-item-inner">
        <div class="wcpf-title-container">
            <span class="wcpf-title"><?php echo $item['title']; ?></span>
        </div>
    </div>
</div>
<?php
    if ( isset( $item['children'] ) && is_array( $item['children'] ) ) {
        foreach ( $item['children'] as $child_item ) {
            $template_loader->render_template( 'field/box-item.php', [
                'item' => $child_item,
                'filter_key' => $filter_key,
                'box_style' => $box_style
            ] );
        }
    }
?>
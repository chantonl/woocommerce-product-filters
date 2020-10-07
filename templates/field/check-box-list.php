<?php
    $field_class = [
        'wcpf-field-item',
        'wcpf-front-element',
        'wcpf-front-element-' . $entity_id,
        'wcpf-field-checkbox-list'
    ];

    $is_hide = false;

    if ( $is_toggle_active ) {
        $field_class[] = 'wcpf-box-style';

        if ( $default_toggle_state == 'hide' ) {
            $field_class[] = 'wcpf-box-hide';

            $is_hide = true;
        }
    }

    if ( $display_hierarchical_collapsed ) {
        $field_class[] = 'wcpf-hierarchical-collapsed';
    }

    if ( $see_more_options == 'scrollbar' ) {
        $field_class[] = 'wcpf-scrollbar';
    } else if ( $see_more_options == 'moreButton' ) {
        $field_class[] = 'wcpf-contain-more-button';
    }

    if ( $css_class ) {
        $field_class[] = $css_class;
    }

    if ( ! count( $option_items ) || ! $is_enabled_element ) {
        $field_class[] = 'wcpf-status-disabled';
    }
?>
<div class="<?php echo implode( ' ', $field_class ); ?>">
    <div class="wcpf-inner">
        <?php if ( $is_display_title ): ?>
        <div class="wcpf-checkbox wcpf-field-title wcpf-heading-label">
            <span class="text"><?php echo $entity->get_title(); ?></span>
            <?php if ( $is_toggle_active ): ?>
                <span class="box-toggle"></span>
            <?php endif; ?>
        </div>
        <?php endif;?>
        <div class="wcpf-checkbox-list field-input-container wcpf-content"<?php if ( $is_hide ): ?> style="display: none;"<?php endif; ?>>
            <?php
                foreach ( $option_items as $item ) {
                    $template_loader->render_template( 'field/check-box-item.php', [
                        'item' => $item,
                        'filter_key' => $filter_key,
                        'tree_view_style' => $tree_view_style,
                        'display_hierarchical_collapsed' => $display_hierarchical_collapsed,
                        'display_product_count' => $display_product_count,
                    ] );
                }

                if ( $see_more_options == 'moreButton' ) {
                    $template_loader->render_template( 'more-button.php', [
                        'front_element' => $front_element
                    ] );
                }
            ?>
        </div>
    </div>
</div>
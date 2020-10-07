<div class="panel tabs-panel">
    <h2 class="hndle header">
        <div class="left-position">
            <?php
                $template_loader->render_template( 'parts/header-navigation.php', [
                    'panel' => $panel,
                    'panel_id' => $panel_id
                ], __DIR__ );
            ?>
            <span class="title"><?php echo $panel_title; ?></span>
        </div>
        <div class="tabs-heading-wrapper">
            <?php
            foreach( $tabs as $tab_id => $tab ):
                $heading_class = '';

                if ( $tab === reset( $tabs ) ) {
                    $heading_class .= ' active-tab';
                }
                ?>
                <div class="tab-heading<?php echo $heading_class; ?>" data-tab-id="<?php echo esc_attr( $tab_id ); ?>">
                    <div class="heading">
                        <?php echo $tab['label']; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </h2>
    <div class="inside tabs-wrapper">
        <form class="panel-form">
            <?php
            foreach( $tabs as $tab_id => $tab ):
                $tab_class = '';

                if ( $tab === reset( $tabs ) ) {
                    $tab_class .= ' active-tab';
                }
                ?>
                <div class="tab-content<?php echo $tab_class; ?>" data-tab-id="<?php echo esc_attr( $tab_id ); ?>">
                    <?php
                        foreach ( $tab['controls'] as $control ) {
                            $control->render_control();
                        }
                    ?>
                </div>
            <?php endforeach; ?>
        </form>
        <?php
            if ( ! $panel_auto_save) {
                $template_loader->render_template( 'parts/bottom-navigation.php', [], __DIR__ );
            }
        ?>
    </div>
</div>